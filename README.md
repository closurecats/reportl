# Reportl
##### School Management Software
---
## Initial Setup
#### Requirements
Tested with the versions below
- docker (1.12.5 Build 7392c3b)
- docker-compose (1.9.0 Build 2585387)

#### Installing
- [ ] Clone the repo `git clone https://github.com/closurecats/reportl.git`
- [ ] CD into the folder, by default it will be named reportl `cd reportl`
- [ ] Build and start the docker app using `docker-compose up`
- [ ] Open a bash prompt in the web container `docker exec -it reportl_web_1 bash`
- [ ] Run all the database migrations `npm run db:up` (Wait until the MySQL container is fully initialized)

##### Optional
- [ ] Add seed data to your database `npm run db:seed`

---
