#pragma strict

var fall_out_counter:int;

function Start () {
	fall_out_counter = 0;
}

function Update () {

}

function OnTriggerEnter (other : Collider)
{
	if(other.tag == "pupu")
	{
		fall_out_counter ++;
		if(fall_out_counter >= 3)
		{
			Application.LoadLevel(0);
		}
	}
}



