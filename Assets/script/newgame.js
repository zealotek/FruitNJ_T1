#pragma strict


function Start () {

}

function Update () {

}


function OnTriggerEnter (other : Collider)
{
	if(other.tag == "knife")
	{
		if(pupu_hit.check == 1)
		{
			Debug.Log(other.tag);
			pupu.play_status = 1;
			
		}
	}
	
}














