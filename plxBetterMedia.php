<?php
class plxBetterMedia extends plxPlugin {
  public function __construct($default_lang) {
    # appel du constructeur de la classe plxPlugin (obligatoire)
    parent::__construct($default_lang);
    # Ajoute des hooks
    $this->addHook('AdminMediasFoot', 'AdminMediasFoot');
  }
  /*
   * Ajout des scripts
   **/
  public function AdminMediasFoot() {
		echo '<script src="'.PLX_PLUGINS.'plxBetterMedia/dragndrop.js"></script>'."\n";
    echo "<style>
.folder ul {
    padding: 4px 2px 2px;
    list-style: none;
    position: relative;
    border-top: 2px solid;
    border-left: 1px solid;
    border-right: 1px solid;
  border-color:#444;
    background:#44444411;
}
.folder ul ul {
  border-color:#FF1800;
    background:#FF180022;
}
.folder ul li.sub > div button:after {
    background:#FF1800;
}

.folder ul ul ul {
  border-color:#FF9A00;
    background:#FF9A0033;
}
.folder ul ul li.sub > div button:after {
    background:#FF9A00;
}

.folder ul ul ul ul {
  border-color:#FFEF00;
    background:#FFEF0044;
}
.folder ul ul ul li.sub > div button:after {
    background:#FFEF00;
}

.folder ul ul ul ul ul {
  border-color:#21DD00;
}
.folder ul ul ul ul li.sub > div button:after {
    background:#21DD00;
}
.folder ul ul ul ul ul ul {
  border-color:#008CFF;
}
.folder ul ul ul ul ul li.sub > div button:after {
    background:#008CF0;
}
.folder ul ul ul ul ul ul {
  border-color:#6942FF;
}
.folder ul ul ul ul ul li.sub > div button:after {
    background:#6942FF;
}
.folder li {
	padding: .4em 2px 0px;
  display: inline-block;
  vertical-align:top;
max-width:30vw;
position:relative;
}
.folder li.sub div{
 bottom:-2px;
}
.folder li.sub{
 bottom:-4px;
}

.folder {
 position:relative;
z-index:0;
display:flex;
text-align:center;
flex-wrap:wrap;}
.folder .directory {
position:relative;
font-size:0.9rem;
margin:2px;
transition:all 1s;
display:inline-block;
}
.folder .directory:after,
.folder .directory:before {
content:'';
display:block;
position:absolute;
left:0;
}
.folder .directory.selected button,
.folder .directory button:hover,
.folder .directory:before {
border-top-left-radius:.3em;
border-top-right-radius:.3em;
border:1px solid slategrey;
}
.folder .directory:before {
top:-.8em;
width:40%;
height:.8em;
border-bottom:0;
background:#999;
}
.folder .directory:after {
width:100%;top:0;
height:100%;
z-index:0;
background:#999;
}
.folder .directory, .folder button {
width:12em;
}
.folder button {
color:inherit;
position:relative;
background:lightyellow;
z-index:1;
height:100%;
padding:.8em;
margin:0;
transform-origin:0 100%;
border:1px solid slategrey;
}

.folder .directory button.isdragover,
.folder .directory.selected button,
.folder .directory button:hover {
transform:skew(-10deg) scaleY(.9);
}
.folder .directory.selected button {
background:papayawhip;
}
.folder .directory.selected button {
font-weight:bold;
}
.folder .directory.selected button {
font-weight:bold;
}
</style>\n";
  }

  }
?>
