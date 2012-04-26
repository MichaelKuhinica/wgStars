(function($) {

    function selectNStar(input, root) {
        nth = input.val();
        if(nth > 0) {
            selectStar(root.find(':nth-child('+nth+')'));
        }
    }

    function hoverStar(el) {
        el.prevAll().andSelf().removeClass('wg-star-voted');
        el.prevAll().andSelf().addClass('wg-star-over');  
        el.nextAll().removeClass('wg-star-voted');  
    }

    function selectStar(el) {
        el.nextAll().removeClass('wg-star-voted');
        el.prevAll().andSelf().addClass('wg-star-voted');
    }

    function generateStars(id) {
        return '<div id="'+id+'" class="wg_starts_list"><div class="wg-star">&nbsp;</div> <div class="wg-star">&nbsp;</div> <div class="wg-star">&nbsp;</div> <div class="wg-star">&nbsp;</div> <div class="wg-star">&nbsp;</div></div> ';
    }

    $.fn.wgStars = function() {
        return this.each(function() {
            var input = $(this);
            root_id = input.attr('id')+'-stars';
            input.before(generateStars(root_id));
            var root = $("#"+root_id);
            selectNStar(input, root);

            root.find('.wg-star').hover(  
                function() {
                    el = $(this);
                    hoverStar(el);
                },  
                function() {  
                    el =  $(this);
                    el.prevAll().andSelf().removeClass('wg-star-over');
                    selectNStar(input, root);
                }  
            );  

            root.find('.wg-star').click(function(e){
                star = $(this);
                selectStar(star);
                input.val(star.index()+1);
            });
        });
    }
})(jQuery);