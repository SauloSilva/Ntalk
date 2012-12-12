class window.DuplicateEmail extends BaseDuplicateName
  constructor: ->
    super
      origin: $('input.email')
      target: $('input.copy')
      button: $('a.copy_email_input')
  
  run: ->
    if @origin.val().length > 0
      @target.val( @origin.val() )
    else
      alert 'voce nao digitou nada'