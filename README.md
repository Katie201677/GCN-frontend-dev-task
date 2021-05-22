# Play Sports Network Frontend Development Task
## Update to navigation on globalcyclingnetwork.com for mobile view
I have replicated the GCN homepage with a few tweaks to the navigation as detailed below. Further ideas that I did not have time to implement are also detailed below.

I have built this with Create React App or it is served on GitHub Pages: https://katie201677.github.io/GCN-frontend-dev-task/. View the repo [here](https://github.com/Katie201677/GCN-frontend-dev-task).

To run: 
* npm run build
* npm run deploy

### Summary of changes
* Removed the buttons from the top red banner and replaced with text links as the buttons looked a bit crowded.
* Top nav menu button and links changed to position sticky for ease of navigation whereever you are on the page.
* Added expandable sub-menus to the drop-down menu as it was very long. It is now in sections - home, videos and presenters.
* Expanded menu is also position sticky when it reaches the banner at the top, although the menus are so long there is some overflow that needs addressing. 
* Moved the "Latest videos" sub-header above the search box and removed the latest video (which is repeated in the thumbnails) as the search box is a bit lost under the adverts and not easy to identify on the page. 
* Added a dropdown to the search box - intended to allow quick filter by catgegory (although I have not written the code to do that). 

### Further changes I would make with more time
* The initial landing page overlay doesn't seem to work that well on mobile and could be removed / adjusted. 
* The 'latest videos' are not currently categorised / sorted. Could they be categorised as per the categories in the menu to allow easier browsing? I have also included them as videos rather than thumbnails at the moment which is slowing down the page load. 
* The content is slightly lost below the large advert in mobile view. I assume the ad needs to be there for commercial reasons but can it be adjusted / scaled down?

### Preparing the site for production
* I have used Create React App for this demo so would need to create a production build. The site would also need tests to be written and checked for accessibilty.