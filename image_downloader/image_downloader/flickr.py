import time

import flickrapi

import config


class Flickr():

	def __init__(self):
		
		# Connect to Flickr API, initialize rate limiter
		self.api = flickrapi.FlickrAPI(config.flickr_api_key, config.flickr_api_secret, format='parsed-json')
		self.calls = 0
		self.start_time = time.time()
	
	# Get focal length for Flickr image with given ID
	def get_focal_length(self, id):
	
		if self.calls == 3500:
			self.rate_limiter()
		exif_data = self.api.photos.getExif(photo_id=id)
		self.calls += 1
		for data in exif_data['photo']['exif']:
			if data['tag'] == 'FocalLength':
				return data['raw']['_content'].split()[0]
		return False
	
	# Ensures that we don't go over API rate limit (3600 calls/hour)
	def rate_limiter(self):
		
		current_time = time.time()
		end_time = self.start_time + 3600
		if current_time < end_time:
			time.sleep(end_time - current_time)
		self.calls = 0
		self.start_time = time.time()