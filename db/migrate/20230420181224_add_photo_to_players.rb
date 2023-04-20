class AddPhotoToPlayers < ActiveRecord::Migration[7.0]
  def change
    add_column :players, :photo, :string
  end
end
