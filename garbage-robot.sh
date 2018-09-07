#!/bin/bash

cd /tmp

# the worst way of deciding which grep binary to use
GREP=grep
if [[ $(which ggrep) != "" ]]; then
	GREP=ggrep
fi

# the worst way of querying the github API
curl \
	-sS -H 'Accept: application/json' \
	'https://api.github.com/gists/fbd302cef7693e62c769' \
		 > /tmp/gist.json

# the worst way of finding where to stop
STOPLINE=$(cat -n /tmp/gist.json \
				  | grep 'Flash Font Enumeration' \
				  | awk '{print $1}')
STOPLINE=$((STOPLINE-1))

# the worst transformation from markdown to js
cat /tmp/gist.json \
	| jq -r '.files."config.md".content' \
	| head -n $STOPLINE \
	| tail -n +2 \
	| $GREP -P '^(\#\s|\s+|[\S\.]+ ==? ).*$' \
	| $GREP -Pv '^\s*$' \
	| perl -pe 's/== xx/= xx/; s/= xx/= 0/; s/= blank/= ""/;' \
	| perl -pe 's@^#@//@; s@^\s+@  // @' \
	| perl -pe 's@^([\S\.]+)\s+=\s+(\S*?)\s*$'"@user_pref('\1', \2);\\n@" \
		   > /tmp/user.js

# the worst syntax check
node -e 'function user_pref() {}' /tmp/user.js

# the worst ssh and git config
mkdir -p ~/.ssh
echo "$SSH_DEPLOY_KEY" | base64 -d > ~/.ssh/id_rsa
chmod 600 ~/.ssh/id_rsa
echo -e 'Host github.com\n\tStrictHostKeyChecking no\n\tIdentityFile ~/.ssh/id_rsa\n' >> ~/.ssh/config
git config --global user.name 'Garbage Robot'
git config --global user.email 'bot@garbage.robot'
git config --global push.default simple

# the worst "do we have an update" check
git clone ssh://git@github.com/aaron-em/firefox-privacy-config-generator repo
diff /tmp/user.js repo/user.js 1>/dev/null 2>&1

if [[ "$?" == "0" ]]; then
	echo "No update (repo user.js is identical to this one)"
	exit 0;
fi

# the worst way to actually perform an update
cd repo
cp -f ../user.js .
git add ./user.js
git commit -m 'garbage robot update (gist version of '$(cat /tmp/gist.json | jq -r '.updated_at')')'
git push origin master
