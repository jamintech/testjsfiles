(function($){
	$.fn.graph = function(input){
		//Options
		var defaults = {
			graphSize : 600,
			inputName : 'graph',
			barSize : 50,
			barSpacing : 50,
			autoBalanceShow : true,
			autoBalance : true
		};
		var options = jQuery.extend(defaults, input),
			$t = this,
			hb10 = Math.floor(options.graphSize / 10) - 1,
			lasth = options.graphSize - 9 * (hb10 + 1) - 2,
			acc1;

		/* * * Initialize * * */
		$t.height(options.graphSize);

		//Stripes
		$t.addClass('graphContainer').append('<div class="graphMULine"><span>&nbsp;</span></div><div class="graphMULine"><span>&nbsp;</span></div><div class="graphMULine"><span>&nbsp;</span></div><div class="graphMULine"><span>&nbsp;</span></div><div class="graphMULine"><span>&nbsp;</span></div><div class="graphMULine"><span>&nbsp;</span></div><div class="graphMULine"><span>&nbsp;</span></div><div class="graphMULine"><span>&nbsp;</span></div><div class="graphMULine"><span>&nbsp;</span></div><div class="graphMULine"><span>&nbsp;</span></div><div class="graphMULastLine"><span>&nbsp;</span></div>');
		$('.graphMULine', $t).css({height : hb10 + 'px'});
		$('.graphMULine:last', $t).css({height : lasth + 'px'});

		//Bars
		var barcounter = 0;
		acc1 = options.barSpacing;
		$(options.data).each(function(){
			barcounter = barcounter+1;
			var h = Math.round(options.graphSize * this.value / 100);
			$t.append('<div class="graphBarCont" style="left:' + acc1 + 'px;"><div class="graphBar" style="height:' + h + 'px;background:' + this.color + ';"></div><input type="hidden" name="' + options.inputName + '[]" value="' + this.value + '" /><span><b>' + barcounter + '</b></span></div>')
			acc1 += options.barSpacing + options.barSize;
		})
		$('.graphBarCont', $t).css({width : options.barSize + 'px', height : options.graphSize + 'px'})
		$('.graphBar', $t).resizable({
			containment : 'parent',
			handles : 'n',
			minHeight : 1,
			maxHeight : options.graphSize,
			resize : function(e, ui){
				var h = ui.size.height,
					iv = get_iv(h),
					els, total = 0, rest = 100 - iv, i, subtotal = 0;

				$('input', $(this).parent()).val(iv);

				if(options.autoBalance){
					els = $('.graphBar', $t).not(this);
					els.each(function(){
						var iv = get_iv($(this).height());
						total += iv;
					})

					i = 0;
					els.each(function(){
						var iv = get_iv($(this).height()),
							new_iv = (total == 0) ? Math.round(rest / (options.data.length - 1)) : Math.round((iv / total) * rest) || 0,
							p = $(this).parent(), tabs, cnt, tel, v, x,
							new_h = (new_iv / 100) * options.graphSize || 0;
						i++;
						if(i == options.data.length - 1){
							new_iv = rest - subtotal;
							if(new_iv < 0){
								tabs = Math.abs(new_iv);
								new_iv = 0;
								for(cnt = options.data.length - 1; cnt >= 0; cnt--){
									tel = $('.graphBar', $t).get(cnt);
									if(tel != this){
										tabs--;
										x = $('input', $(tel).parent());
										v = x.val();
										x.val(v - 1);
									}
									if(tabs == 0){
										break;
									}
								}
							}
						}
						else{
							subtotal += new_iv;
						}

                        $('input', p).val(new_iv);
                        $('.graphBar', p).height(new_h);
					})
				}
			},
			start : function(e, ui){
				//Check auto-balance controls
				checkAutoBalance($t);
				$('.graphBar', $t).css({bottom : 0, top : 'auto'});
			}
		});

		//Auto balance control
		if(options.autoBalanceShow){
			acc1 = Math.round(Math.random() * 1000);
			$t.append('<input type="hidden" name="graphAutoBalance" value="on" id="graphAutoBalanceOn' + acc1 + '/>')
		}

		//Utility functions
		function checkAutoBalance($t){
			options.autoBalance = false;
		}
		function get_iv(h){
			return Math.round(100 * h / options.graphSize) || 0;
		}

		//Chaining
		return false;
	}
})(jQuery)