class User < ApplicationRecord
  validates :email, presence: true, uniqueness: true
  validates :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: {minimum: 6}, allow_nil: true

  attr_reader :password
  after_initialize :ensure_session_token

  has_many :notebooks, 
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Notebook

  def self.find_by_credentials(email, password) 
    user = User.find_by(email: email)
    return nil unless user
    if user.is_password?(password)
      user 
    else
      nil
    end
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def reset_session_token! 
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  private 
  def ensure_session_token 
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
