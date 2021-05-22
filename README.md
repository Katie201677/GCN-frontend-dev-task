# Play Sports Network Frontend Development Task
## Update to navigation on globalcyclingnetwork.com for mobile view
I have replicated the GCN homepage with a few tweaks to the navigation as detailed below. Further ideas that I did not have time to implement are also detailed below.  


### Summary of changes
* Removed the buttons from the top red banner and replaced with text links as the buttons looked a bit crowded.
* Nav menu changed to position sticky.
* Added expandable sub-menus to the drop-down menu as it was very long. It is now in sections - home, videos and presenters.
* Moved the "Latest videos" sub-header above the search box and removed the latest video (which is repeated in the thumbnails) as the search box is a bit lost under the adverts and not easy to identify on the page. 
* Added a dropdown to the search box - intended to allow quick filter by catgegory (although I have not written the code to do that). 

### Further changes I would make with more time
* The initial landing page overlay doesn't seem to work that well on mobile and could be removed / adjusted. 
* The 'latest videos' are not currently categorised / sorted. Could they be categorised as per the categories in the menu to allow easier browsing? I have also included them as videos rather than thumbnails at the moment which is slowing down the page load. 

### Preparing the site for production
* I have used Create React App for this demo so would need to create a production build. The site would also need tests to be written. 