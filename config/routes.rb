Rails.application.routes.draw do
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get "players", to: "players#index"
  get "players/new", to: "players#new", as: :new_player
  post "players", to: "players#create"
  get "players/:id", to: "players#show", as: :player
  get "players/:id/edit", to: "players#edit", as: :edit_player
  patch "players/:id", to: "players#update"
  delete "players/:id", to: "players#destroy"
end
