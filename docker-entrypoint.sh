#!/bin/bash

GREP=grep
if [[ $(which ggrep) != "" ]]; then
	GREP=ggrep
fi

curl \
	-sS -H 'Accept: application/json' \
	'https://api.github.com/gists/fbd302cef7693e62c769'\
	| jq -r '.files."config.md".content' \
		 > /tmp/gist.json

STOPLINE=$(cat -n /tmp/gist.json \
				  | grep 'Flash Font Enumeration' \
				  | awk '{print $1}')

head -n $((STOPLINE-1)) /tmp/gist.json \
	| tail -n +2 \
	| $GREP -P '^(\#\s|\s+|[\S\.]+ = ).*$' \
	| $GREP -Pv '^\s*$' \
	| perl -pe 's/==? xx/=/; s/= blank/= ""/;' \
	| perl -pe 's@^#@//@; s@^\s+@  // @' \
	| perl -pe 's@^([\S\.]+)\s+=\s+(\S*?)\s*$'"@user_pref('\1', \2);\\n@"
