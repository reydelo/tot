Rails.application.routes.draw do
  devise_for :users, controllers: { :omniauth_callbacks => "callbacks" }
  root 'site#index'

  namespace :api do
    namespace :v1 do
      resources :recipients, defaults: { format: 'json' }, only: [:index, :create, :destroy, :update]
      resources :thought_dates, defaults: { format: 'json' }, only: [:index, :create, :destroy, :update]
    end
  end

end
