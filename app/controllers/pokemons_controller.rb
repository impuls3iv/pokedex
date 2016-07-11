class PokemonsController < ApplicationController

  def index
    @pokemons = Pokemon.all
  end

  def show

    @pokemon = Pokemons.find(params[:id])

    respond_to do |format|
      format.json { render json: @pokemon }
    end

  end

end
