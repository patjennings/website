# !/bin/bash 
json=$(cat articles.json)
len=$(echo $json | jq length)
for i in $( seq 0 $(($len - 1)) ); do
    client=$(echo $json | jq -r .[$i].client)
    title=$(echo $json | jq -r .[$i].title)
    lang=$(echo $json | jq -r .[$i].lang)
    ref=$(echo $json | jq -r .[$i].ref)
    release=$(echo $json | jq -r .[$i].release)
    permalink=$(echo $json | jq -r .[$i].permalink)
    project_thumbnail=$(echo $json | jq -r .[$i].project_thumbnail)
    project_weight=$(echo $json | jq -r .[$i].project_weight)
    project_bg=$(echo $json | jq -r .[$i].project_bg)
    project_fg=$(echo $json | jq -r .[$i].project_fg)
    layout=$(echo $json | jq -r .[$i].layout)
    isInteraction=$(echo $json | jq -r .[$i].isInteraction)
    isMotion=$(echo $json | jq -r .[$i].isMotion)
    promoted=$(echo $json | jq -r .[$i].promoted)

    file="${project_weight}_${ref}.md" 

    touch $file
    echo "---" >> $file
    echo "client : ${client}" >> $file
    echo "title : ${title}" >> $file
    echo "lang : ${lang}" >> $file
    echo "ref : ${ref}" >> $file
    echo "release : ${release}" >> $file
    echo "permalink : ${permalink}" >> $file
    echo "project_thumbnail : ${project_thumbnail}" >> $file
    echo "project_weight : ${project_weight}" >> $file
    echo "project_bg : ${project_bg}" >> $file
    echo "project_fg : ${project_fg}" >> $file
    echo "layout : ${layout}" >> $file
    echo "isInteraction : ${isInteraction}" >> $file
    echo "isMotion : ${isMotion}" >> $file
    echo "promoted : ${promoted}" >> $file
    echo "---" >> $file
    # echo "client : ${client}" 
done
