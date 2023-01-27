# !/bin/bash 
json=$(cat articles.json)
len=$(echo $json | jq length)
for i in $( seq 0 $(($len - 1)) ); do
    client=$(echo $json | jq -r .[$i].client)
    title=$(echo $json | jq -r .[$i].title)
    titleraw=$(echo $json | jq -r .[$i].title_raw)
    release=$(echo $json | jq -r .[$i].release)
    permalink=$(echo $json | jq -r .[$i].permalink)
    thumbnail=$(echo $json | jq -r .[$i].thumbnail)
    weight=$(echo $json | jq -r .[$i].weight)
    project_bg=$(echo $json | jq -r .[$i].project_bg)
    project_fg=$(echo $json | jq -r .[$i].project_fg)
    layout=$(echo $json | jq -r .[$i].layout)
    isInteraction=$(echo $json | jq -r .[$i].isInteraction)
    isMotion=$(echo $json | jq -r .[$i].isMotion)
    promoted=$(echo $json | jq -r .[$i].promoted)

    file="${weight}_${titleraw}.md" 

    touch $file
    echo "---\n"
    echo "client : ${client}" >> $file
    echo "title : ${title}" >> $file
    echo "release : ${release}" >> $file
    echo "permalink : ${permalink}" >> $file
    echo "thumbnail : ${thumbnail}" >> $file
    echo "weight : ${weight}" >> $file
    echo "project_bg : ${project_bg}" >> $file
    echo "project_fg : ${project_fg}" >> $file
    echo "layout : ${layout}" >> $file
    echo "isInteraction : ${isInteraction}" >> $file
    echo "isMotion : ${isMotion}" >> $file
    echo "promoted : ${promoted}" >> $file
    echo "---\n"
    # echo "client : ${client}" 
done
