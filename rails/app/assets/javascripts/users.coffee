window.nameFunction = ->
  alert 'testando funcao global'

class window.User
  constructor: ->
    @inputId =  $('input.user_id')
    @button = $('button.get_user')
    
    @name = $('input.name')
    @email = $('input.email')
    @action()
    
  action: ->  
    @button.click =>
      val = @inputId.val()
      @get(val)
      @style()
  
  style: ->
    @email.css({ 'border', '3px solid #ff0000'; 'background', '#ccc' })
    
  get: (val) ->  
    $.ajax
      type: 'GET'
      url: 'user'
      data: {id: val}
      beforeSend: ->
        console.log 'antes da requisicao'
      success: (data) =>
        @sucess(data)
      error: (xhr) =>
        @error(xhr)
      complete: =>
        @complete()
  
  sucess: (data) ->
    @name.val( data.name )
    @email.val( data.email )
  
  error: (xhr) ->
    console.log("deu erro status: #{xhr.status} ") 
    
  complete: ->
    console.log('nossa requisicao terminou')