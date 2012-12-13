class window.Url
    constructor: ->
      @form = $('#form_button')
      @button = @form.find('button.change_url')
      @verifyUrl()
      
      console.log '-------------------------'      
      console.log @form.attr('style')
      console.log @form.attr('class')
      console.log '-------------------------'
        
      $(document).scroll (e) ->
        console.log 'esta havendo scroll'
        if $(this).scrollTop() > 500
          console.log 'meu scroll passou de 500px da tela'
          $(this).unbind('scroll')
      
      @button.click =>
        if typeof(history.pushState) == 'function'
           history.pushState(null, null, '#/user/new')
        else
          location.hash = '#/user/new'
        
        @verifyUrl()
        
    verifyUrl: ->
      if location.hash == '#/user/new'
        console.log 'url correta'
      else
        console.log 'nao esta na nossa url de cadastro' 
      