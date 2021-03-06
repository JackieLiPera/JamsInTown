**Bandalize**

Bandalize is a full-stack, single-page web application built with React.js, Redux, Ruby on Rails with a PostgreSQL database inspired by the popular live-music site BandsInTown.


**Event Homepage with Geolocation**

![Imgur](https://i.imgur.com/IItz1H4.png)

The app homepage allows users to see events in their area using browser location. Event images are handled with Rails Active Storage and the AWS s3 cloud.

**User Auth**

![Imgur](https://i.imgur.com/szA20pt.png)
![Imgur](https://i.imgur.com/ODHR2af.png)
Users can sign up and log in using the app modal. Click the demo button to start exploring.

**User Account Page**

![Imgur](https://i.imgur.com/qrw2qBb.png)

The user page is inspired by the BandsInTown mobile app. Every user can see their own unique list of tracked artists and RSVP'd events. At the top, users can view their suggested events based on artists they track.

**Event Page & Event RSVPs**

![Imgur](https://i.imgur.com/lDVbwIu.png)

The event page is both for upcoming events and events that have already happened. For upcoming events, users can RSVP or click a link to buy tickets from StubHub. For events that have already happened, users can share their experiences and post personal photos from the concert.

The RSVP feature allows users to show off what events they're going to. RSVPs also appear on the event page so you can see how many other people are attending an event. Clicking the RSVP button will add the event to the users account page.

**Artist Page & Artist Tracking**

![Imgur](https://i.imgur.com/ToEiZG9.png)

The artist page displays key pieces of information such as the artist's tour status, number of trackers, the artist bio. If the artist is on tour, users can view their upcoming events and RSVP to those events directly. Users can also write a review with pictures to share their experience from a previous event. A user also has the ability to delete their own comments.

The tracking feature allows users to follow specific artists. Users can see how many trackers an artist has by clicking on the artist page. Once a user tracks an artist, the artist will appear on the user account page and future events will be incorporated into the user's suggested events feed.

**Venue Page with Google Maps API**
![Imgur](https://i.imgur.com/1d9UfEX.png)

The venue page displays all of the key information about a particular venue including location information and a map linked to Google Maps. Users can view upcoming events at each venue and RSVP to an event directly on this page.

**Search Bar**
![Imgur](https://i.imgur.com/7Kfm0xK.png)

Quick accessibility to any artist or venue page, users can use the search feature located in the navigation bar.

**Loading**

During fetches to the backend server, a simple loading Gif is displayed as the user waits for content.

**Genre Page**

*Coming soon* Users will be able to scroll through artists based on their genre of choice. A list of genres are located on the homepage.
