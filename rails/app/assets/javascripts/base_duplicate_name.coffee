class window.BaseDuplicateName
  constructor: (options) ->
    @origin = options.origin
    @target = options.target
    @button = options.button
    @action()
    
  action: ->
    @button.click =>
      @run()
      
  run: ->
    throw 'implement'