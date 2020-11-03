    //hide section
    $('.section').hide();

    setTimeout(function(){

      // show sections
      $('.section').fadeIn();

      // hide proloader
      $('.loader').fadeOut();

    $(document).ready(function(){
      // init start side nav
      $('.button-collapse').sideNav();
      // init
      $('.modal').modal();

      // init select
      $('select').material_select();

      // count
      $('.count').each(function(){
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration:3000,
          easing:'swing',
          step:function(now){
            $(this).text(Math.ceil(now));
          }
        });

      });

      // comments
      $('.approve').click(function(e){
        Materialize.toast('Commentaire approuvé', 3000)
        e.preventDefault();
      });
      $('.disapprove').click(function(e){
        Materialize.toast('Commentaire désapprouvé', 3000)
        e.preventDefault();
      });
      // quick tdl
      $('#todo-form').submit(function(e){
        const output = `<li class="collection-item">
                <div>${$('#todo').val()} 
                  <a href="#!" class="secondary-content delete">
                  <i class="material-icons">close</i>
                  </a>
                </div>
              </li>`;
        $('.todos').append(output);
        Materialize.toast('Todo ajouté', 3000);
        e.preventDefault();
      });
      // delete tdl
      $('.todos').on('click', '.delete', function(e){
        $(this).parent().parent().remove();
        Materialize.toast('Todo supprimé', 3000);
        e.preventDefault();
      });
       CKEDITOR.replace( 'body' );

    });

    }, 1000);
