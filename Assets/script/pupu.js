#pragma strict

var pupu_1 : GameObject;
var pupu_2 : GameObject;

private var nowTime : float ;
private var beforeTime : float ;

var upVector : Vector3;
var xVector : float;

private var copyPupu : GameObject;
public var music_throw : AudioSource;

function Start () {
	nowTime = Time.time;
	beforeTime = nowTime;
}

function Update () {
	nowTime = Time.time;
	if(nowTime >= beforeTime + 1)
	{
		beforeTime = nowTime;
		if(Random.Range(0,10) > 5)
		{
			xVector = Random.Range(-5f,5f);
			copyPupu = GameObject.Instantiate(pupu_2,Vector3(xVector,-6.5,7),Quaternion(0,0,0,0));
			copyPupu.rigidbody.isKinematic = false;
			upVector.x = Random.Range(-150f,150f);
			upVector.y = Random.Range(500f,700f);
			copyPupu.rigidbody.AddForce(upVector);
			copyPupu.rigidbody.AddTorque(Random.Range(-200f,200f),Random.Range(-200f,200f),Random.Range(-200f,200f));
			music_throw.Play();
		}
		else
		{
			//beforeTime = nowTime;
			xVector = Random.Range(-5f,5f);
			copyPupu = GameObject.Instantiate(pupu_1,Vector3(xVector,-6.5,7),Quaternion(0,0,0,0));
			copyPupu.rigidbody.isKinematic = false;
			upVector.x = Random.Range(-150f,150f);
			upVector.y = Random.Range(500f,700f);
			copyPupu.rigidbody.AddForce(upVector);
			copyPupu.rigidbody.AddTorque(Random.Range(-200f,200f),Random.Range(-200f,200f),Random.Range(-200f,200f));
			music_throw.Play();
		}
	}
}