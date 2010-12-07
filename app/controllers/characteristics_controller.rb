class CharacteristicsController < ApplicationController

  def index

  end

  def new
    @characteristic = Characteristic.new
    @characteristic.categories << Category.find(params[:id])
  end
  
  def save_to_item

  end

  # POST /items
  # POST /items.xml
  def create
    @characteristic = Characteristic.new(params[:characteristic])
    @characteristic.categories << Category.find(params[:category_id])

    respond_to do |format|
      if @characteristic.save
        format.html { redirect_to(categories_path, :notice => 'Characteristic was successfully added.') }
        format.xml  { render :xml => @characteristic, :status => :created, :location => @characteristic }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @characteristic.errors, :status => :unprocessable_entity }
      end
    end
  end
end
