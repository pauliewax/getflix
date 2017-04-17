# Schema Information

## users

| column name | data type | details |
| ----------- |-----------| --------|
| id          | integer   | not null, primary key |
| username    | string    | not null, indexed, unique |
| password_digest | string | not null |
| session_token | string | not null, indexed, unique |

## videos

| column name | data type | details |
| ----------- |-----------| --------|
| id | integer | not null, primary key |
| video_url | string | not null, indexed, unique |
| image_url | string | not null, indexed, unique |
| description | text | not null |
| title | string | not null |
| genre | string | not null |
| year | integer | not null |

## playlists
| column name | data type | details |
| ----------- |-----------| --------|
| id | integer | not null, primary key |
| user_id | integer | not null, foreign key (references users), indexed, unique[video_id] |
| video_id | integer | not null, foreign key (references videos), indexed |

## actors

| column name | data type | details |
| ----------- |-----------| --------|
| id | integer | not null, primary key |
| name | string | not null, indexed, unique |

## castings
| column name | data type | details |
| ----------- |-----------| --------|
| id | integer | not null, primary key |
| actor_id | integer | not null, foreign key (references actors), indexed, unique[video_id] |
| video_id | integer | not null, foreign key (references videos), indexed |
