class CreatePlayers < ActiveRecord::Migration[7.0]
  def change
    create_table :players do |t|
      t.string :name
      t.string :position
      t.integer :age
      t.integer :number

      t.timestamps
    end
  end
end
