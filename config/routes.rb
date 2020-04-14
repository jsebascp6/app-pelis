Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :v1, defaults: { format: 'json' } do
    resources :movies, only: [:index, :create], defaults: {format: :json}
    resources :bookings, only: [:index, :create], defaults: {format: :json}
  end

  get '*page', to: 'home#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  root to: 'home#index'
end
