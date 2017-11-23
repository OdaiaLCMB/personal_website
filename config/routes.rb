Rails.application.routes.draw do

  scope '(:locale)', locale: /fr/ do
    root to: 'pages#home'

    get 'about', to: 'pages#about'
    get 'work', to: 'pages#work'
    get 'contact', to: 'pages#contact'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  end

  root to: 'pages#home'
  get 'about', to: 'pages#about'
  get 'work', to: 'pages#work'
  get 'contact', to: 'pages#contact'
end
