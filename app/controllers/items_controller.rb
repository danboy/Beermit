class ItemsController < ApplicationController

  def new
    @item = Item.new
    @categories = Category.all
  end

  def show
    @item = Item.find(params[:id])
  end

  # POST /categories
  # POST /categories.xml
  def create
    @item = Item.new(params[:item])

    respond_to do |format|
      if @item.save
        format.html { redirect_to(@item, :notice => 'item was successfully created.') }
        format.xml  { render :xml => @item, :status => :created, :location => @item }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @item.errors, :status => :unprocessable_entity }
      end
    end
  end
end
