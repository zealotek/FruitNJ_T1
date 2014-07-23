#pragma strict

var mySkin : GUISkin;

function Start () {
}

function Update () {

}

function OnGUI () {  
/*
    GUI.matrix = Matrix4x4.TRS(Vector3.zero, Quaternion.identity,   
        Vector3(Screen.width / 800.0, Screen.height / 600.0, 1));  
*/
    GUI.skin = mySkin;  
    if (GUI.Button(Rect(200, 200, 150, 150), "", "PlayButton")) {  
        Application.LoadLevel(1);  
    }  
   
}  
