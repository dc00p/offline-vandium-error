cwd=$(pwd)
cd lib/ &&  npm link && cd $cwd

find . -maxdepth 3 -type f  -name "package.json"  -not -iwholename "./node_modules*"  -not -iwholename "./lib/*" -not -iwholename "./tests/*"  -not -iwholename "./package.json"  -print0 | while IFS= read -r -d $'\0' line; do
    DIR=$(dirname "$line")
    echo "processing : cd $DIR/"
    cd $DIR/ && npm link vandium --save && npm link 'offline-vandium-lib' --save  && cd $cwd &
done


sls offline start --port 8001 --stage dev --corsAllowOrigin '*' --corsAllowHeaders 'x-amz-date,authorization,content-type,accepts,referer'