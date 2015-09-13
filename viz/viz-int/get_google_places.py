from __future__ import print_function
import sys
from googleplaces import GooglePlaces

YOUR_API_KEY = ''

google_places = GooglePlaces(YOUR_API_KEY)

# You may prefer to use the text_search API, instead.
query_result = google_places.text_search(
        #location='United States', 
        query=sys.argv[1], #'Alcorn State University',
        radius=20000) #, types=[types.TYPE_FOOD])

print(query_result.raw_response['results'][0]['formatted_address'])
print(query_result.raw_response['results'][0]['geometry']['location'])

