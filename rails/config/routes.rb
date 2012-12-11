ProjectName::Application.routes.draw do
  root to: 'pages#index'
  get 'page' => 'pages#index', as: :page
end
