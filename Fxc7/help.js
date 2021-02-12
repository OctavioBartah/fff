const help = (prefix, instagram, yt, name, pushname2, user, limitt, uptime, jam, tanggal) => { 
	return `
	


\`\`\`INSTAGRAM OFFICIAL\`\`\`
https://www.instagram.com/lordescreamocanal/


\`\`\`POR FAVOR, LEIA AS NOTAS ABAIXO ANTES\`\`\`
\`\`\`USANDO O BOT\`\`\`

  ╭──────「 *REGULAMENTO ${name}* 」
  ┴
  ┣⊱  \`\`\`NOMA USUARIO:\`\`\` *${pushname2}*
  ┣⊱  \`\`\`VERIFICACAO:\`\`\` ✅
  ┣⊱  \`\`\`LIMITE:\`\`\` *${limitt}*
  ┣⊱  \`\`\`ATIVO:\`\`\` ${kyun(uptime)}
  ┣⊱  \`\`\`HORA:\`\`\` *${jam} WIB*
  ┣⊱  \`\`\`ENCONTRO:\`\`\` *${tanggal}*
  ┣⊱  \`\`\`VERSAO:\`\`\` *6.5.0*
  ┣⊱  \`\`\`USUARIO REGISTRADO:\`\`\` *${user.length} User*
  ┣⊱  ❌ *SPAM*
  ┣⊱  ❌ *CALL & VC*
  ┣⊱  \`\`\`Quebra??\`\`\` *Banido*
  ┬
  ╰────────────────────────


        LOLI_SENPAI 
        
         Menu 

 ╭─ MIDIA DOWNLOAD ────
  |
  |➻ ${prefix}meme
  |➻ ${prefix}memeindo
  |➻ ${prefix}wait
  |➻ ${prefix}ytmp4
  |➻ ${prefix}ytmp3
  |➻ ${prefix}playmp3
 ╰───────────────

 ╭─ CRIADOR MIDIA   ────
  | ➻ ${prefix}harrypotter CAFE
 │➻ ${prefix}stiker
 │➻ ${prefix}gifstiker
 │➻ ${prefix}toimg
 │➻ ${prefix}img2url
 │➻ ${prefix}nobg
 │➻ ${prefix}tomp3
 │➻ ${prefix}ocr     
 ╰────────────

 ╭─  MIDIA GRUPO ────. 
 │
 │➻ ${prefix}modeanime On/Off
 │➻ ${prefix}naruto
 │➻ ${prefix}minato
 │➻ ${prefix}boruto
 │➻ ${prefix}hinata
 │➻ ${prefix}sakura
 │➻ ${prefix}sasuke
 │➻ ${prefix}ichigo
 │➻ ${prefix}yns
 │➻ ${prefix}ngnl
 │➻ ${prefix}kazuma
 │➻ ${prefix}yaoi
 │➻ ${prefix}ash
 │➻ ${prefix}kurumi
 │➻ ${prefix}anime
 │➻ ${prefix}animecry
 │➻ ${prefix}neonime
 │➻ ${prefix}animekiss
 │➻ ${prefix}animewp
 │➻ ${prefix}wink
 │➻ ${prefix}nsfw On/Off
 │➻ ${prefix}loli
 │➻ ${prefix}blowjob
 │➻ ${prefix}neko
 │➻ ${prefix}trap
 │➻ ${prefix}hentai
 │➻ ${prefix}simih On/Off
 ╰───────────────

 ╭─ ADMS ──────────
 │➻ ${prefix}welcome On/Off
 │➻ ${prefix}grup buka/tutup
 │➻ ${prefix}antilink on/off
 │➻ ${prefix}ownergrup
 │➻ ${prefix}setpp
 │➻ ${prefix}infogc
 │➻ ${prefix}add
 │➻ ${prefix}kick
 │➻ ${prefix}promote
 │➻ ${prefix}demote
 │➻ ${prefix}setname muda nome grupo 
 │➻ ${prefix}setdesc altera descricao
 │➻ ${prefix}linkgrup
 │➻ ${prefix}tagme
 │➻ ${prefix}hidetag marcar invisivel
 │➻ ${prefix}tagall
 │➻ ${prefix}mentionall 
 │➻ ${prefix}fitnah
 │➻ ${prefix}listadmin
 │➻ ${prefix}openanime
 │➻ ${prefix}edotense
 ╰─────────────

 ╭─ SO PROPRIETARIO ────
 │➻ ${prefix}addprem mentioned
 │➻ ${prefix}removeprem mention
 │➻ ${prefix}setmemlimit
 │➻ ${prefix}setreply
 │➻ ${prefix}setprefix
 │➻ ${prefix}setnamebot 
 │➻ ${prefix}setppbot
 │➻ ${prefix}bc
 │➻ ${prefix}bcgc
 │➻ ${prefix}ban
 │➻ ${prefix}unban
 │➻ ${prefix}block
 │➻ ${prefix}unblock
 │➻ ${prefix}clearall
 │➻ ${prefix}delete
 │➻ ${prefix}clone
 │➻ ${prefix}getses
 │➻ ${prefix}leave
 ╰───────────────
--------------------------------------------------------
 Loli_senpai > gratis somente no grupo otakus sem curso se quiser contratar para seu grupo chame no PV da Loli 
--------------------------------------------------------
}

exports.help = help

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
return `*${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik*`
}
