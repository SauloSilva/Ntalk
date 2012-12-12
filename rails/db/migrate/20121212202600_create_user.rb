class CreateUser < ActiveRecord::Migration
  def up
    create_table :users, options: 'engine=MyISAM' do |t|
      t.string :name
      t.string :email
    end
  end

  def down
    drop_table :users
  end
end
