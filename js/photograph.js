// 按照文件夹显示图片
function display_photos_by_folder(folder_name){
//                alert("called");
    // 获取显示图片的区域
    var photo_area = document.getElementById("photo-list");
    var json_data = document.getElementById("photo_json").innerHTML;
//                alert(json_data);
    var photo_info_obj = JSON.parse(json_data);
    // 获取指定文件夹中的所有图片
    var photo_list = photo_info_obj[folder_name];
//                alert(photo_list);
    var photo_content_html = "";
    for( var i = 0 ; i < photo_list.length ; ++i){
        var photo_path = "<img class=\"photos\" src=\"" + photo_list[i] + "\">" + "<br>";
//                    alert(photo_path);
        photo_content_html += photo_path;
    }
    photo_area.innerHTML = photo_content_html;
}
