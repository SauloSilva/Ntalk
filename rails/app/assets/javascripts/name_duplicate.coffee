class window.DuplicateName extends BaseDuplicateName
  constructor: ->
    super
      origin: $('input.name')
      target: $('input.copy')
      button: $('a.copy_name_input')

  run: ->
    if @origin.val().length > 0
      @target.val( @origin.val() )
    else
      alert 'voce nao digitou nada'