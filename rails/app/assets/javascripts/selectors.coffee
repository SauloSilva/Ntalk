class window.Selectors
  constructor: ->    
    @form = $('.form')
    @inputName = $('input.name')
    @inputEmail = $('input.email')
    @message = $('.form .message')
    @buttonHide = $('a.hide_input')
    @buttonShow = $('a.show_input')
    
    @buttonShow.hide()
    @message.hide()
    @action()
    
  action: ->
    @buttonHide.click =>
      @hideInput()
    
    @buttonShow.click =>
      @showInput()
    
    @inputEmail.focusin ->
     console.log 'entrou no campo email' 

    @inputEmail.focusout ->
      console.log 'saiu do campo email'
    
      
  hideInput: ->
    @inputName.fadeOut('slow', ->
      $(this).hide()
    )
    @message.show()
    @buttonShow.show()
    @buttonHide.hide()
    
  showInput: ->
    @inputName.show()
    @message.hide()
    @buttonShow.hide()
    @buttonHide.show()

    
    #form.hide()
    #inputName.hide(
    #console.log inputName.val()
    
    #setTimeout( ->
      #inputName.val('alterei o valor do input')
      #inputName.show()
    #, 3000
    
    