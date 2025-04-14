tsc 

if [ $? -ne 0 ]
then
    echo "+=============+"
    echo "| tsc errored |"
    echo "+=============+"
    exit 1
fi

npm run minify

rm ar-admin-3.js