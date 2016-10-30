Rails.application.routes.draw do
  devise_for :users, controllers: { :omniauth_callbacks => "callbacks" }
  root 'site#index'

  namespace :api do
    namespace :v1 do
      resources :recipients, defaults: { format: 'json' } do
        resources :thought_dates, defaults: { format: 'json' }
      end
      resources :thought_dates, defaults: { format: 'json' }
    end
  end

end
