class User < ApplicationRecord
  validates :session_token, :password_digest, :firstname, :lastname, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_many :rsvps
  has_many :rsvp_events, through: :rsvps, source: :event
  has_many :trackings
  has_many :tracked_artists, through: :trackings, source: :artist
  has_many :rsvpd_artists, through: :rsvp_events, source: :artist
  has_many :rsvpd_venues, through: :rsvp_events, source: :venue
  has_many :tracked_venues, through: :tracked_artists, source: :venues
  has_many :tracked_events, through: :tracked_artists, source: :events
  has_many :comments

  after_initialize :ensure_session_token

  attr_reader :password


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.is_password?(password)
    user
  end

  def self.generate_session_token
    SecureRandom.base64
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end
end
