start:
	nf start

setup: setup-interface setup-search-engine setup-server

setup-interface:
	cd interface && npm install

setup-search-engine:
	cd search-engine && npm install

setup-server:
	cd server && npm install
