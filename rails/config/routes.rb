ProjectName::Application.routes.draw do
  root to: 'pages#index'
  get 'page' => 'pages#index', as: :page
  
  get 'user/new' => 'users#new', as: :new_user
  post 'users' => 'users#create', as: :users
  
  get 'user' => 'users#show', as: :user
end
