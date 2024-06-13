// const axios = require('axios');
// const scrimslist = document.querySelector('.scrimslist');
const modify_team_data_btn = document.querySelector('.modify_team_data_btn')
// const select_scrim_btn=document.querySelector('.select_scrim_btn');
const add_new_member_btn=document.querySelector('.add_new_member_btn');
const display_add_scrim_btn= document.querySelector('.display_add_scrim_btn');
const add_scrim_div = document.querySelector('.add_scrim_div');
const display_modify_scrim_btn = document.querySelector('.display_modify_scrim_btn');
const modify_scrim_div = document.querySelector('.modify_scrim_div');
const delete_scrim_div = document.querySelector('.delete_scrim_div');
const display_delete_scrim_btn = document.querySelector('.display_delete_scrim_btn');
const submit_team_btn = document.querySelector('.submit_team_btn');
const add_team_to_scrim = document.querySelector('.add_team_to_scrim'); 
const selectScrim = document.querySelector('.scrims1')
const manage_team_btn = document.querySelector('.manage_team_btn')
const manage_scrim_btn = document.querySelector('.manage_scrim_btn')
const manage_scrim_div = document.querySelector('.manage_scrim_div');
const manage_team_div = document.querySelector('.manage_team_div');
const register_new_team_btn = document.querySelector('.register_new_team_btn');
const manage_existing_team_btn = document.querySelector('.manage_existing_team_btn');

const register_new_team_div=document.querySelector('.register_new_team_div');
const manage_existing_team_div=document.querySelector('.manage_existing_team_div');
const submit_new_team_btn= document.querySelector('.submit_new_team_btn');
const new_teamname_input = document.querySelector('.new_teamname_input');
const teamshortform_input = document.querySelector('.teamshortform_input');
const selectTeams = document.querySelector('.selectTeams')
const select_team_forManagebtn = document.querySelector('.select_team_forManagebtn');
const manage_players_div = document.querySelector('.manage_players_div')
const add_player_btn = document.querySelector('.add_player_btn')
const playername_input = document.querySelector('.playername_input');
const display_add_new_team_btn = document.querySelector('.display_add_new_team_btn');
const display_edit_team_btn = document.querySelector('.display_edit_team_btn');
const add_team_div = document.querySelector('.add_team_div');
const modify_team_div = document.querySelector('.modify_team_div');
const display_delete_team_btn = document.querySelector('.display_delete_team_btn');
const delete_team_scrim_div = document.querySelector('.delete_team_scrim_div');
const delete_team_scrim_btn = document.querySelector('.delete_team_scrim_btn');

const selected_scrim_name = document.querySelector('.selected_scrim_name');
const team_wins = document.querySelector('.team_wins');
const position_points = document.querySelector('.position_points');
const played_matches = document.querySelector('.played_matches');
const submit_team_data_btn = document.querySelector('.submit_team_data_btn');

const selectPlayers = document.querySelector('.selectPlayers')
const selectPlayer = document.querySelector('.members');
// const selectTeam = document.querySelector('.teams')
const teams = document.querySelector('.teams')
const match_wins=document.querySelector('.match_wins');
const kills=document.querySelector('.kills');
const damage=document.querySelector('.damage');
const total_points=document.querySelector('.total_points');
const submit_player_data_btn=document.querySelector('.submit_player_data_btn');

const modify_member_data_btn = document.querySelector('.modify_member_data_btn')
const selected_member = document.querySelector('.selected_member')
const display_selected_member_name=document.querySelector('.display_selected_member_name');
const submit_member_btn=document.querySelector('.submit_member_btn');
const member_name_input =document.querySelector('.member_name_input');
const add_player_div=document.querySelector('.add_player_div');
const edit_player_entries_btn=document.querySelector('.edit_player_entries_btn');
const edit_player_entries_div=document.querySelector('.edit_player_entries_div');
const selected_team=document.querySelector('.selected_team');
const manage_existing_players_btn = document.querySelector('.manage_existing_players_btn');
const manage_existing_players_div = document.querySelector('.manage_existing_players_div');
const add_new_player_btn = document.querySelector('.add_new_player_btn');
const add_players_div = document.querySelector('.add_players_div');
const delete_scrim_btn= document.querySelector('.delete_scrim_btn');
const selectDeleteScrim = document.querySelector('.scrims2');
const selectDeleteTeam = document.querySelector('.teams2');
const delete_member_scrim = document.querySelector('.delete_member_scrim');



manage_scrim_btn.addEventListener('click',()=>{
    manage_scrim_div.style.display="flex";
    manage_team_div.style.display="none";
})

manage_team_btn.addEventListener('click',()=>{
    manage_scrim_div.style.display="none";
    manage_team_div.style.display="flex";

})

///manage scrimn↓↓↓↓↓↓↓↓↓↓↓↓↓
display_add_scrim_btn.addEventListener("click", ()=>{
    add_scrim_div.style.display="block";
    modify_scrim_div.style.display="none";
    delete_scrim_div.style.display="none";
})

display_modify_scrim_btn.addEventListener("click", ()=>{
    
    getScrims();
    modify_scrim_div.style.display="block";
    add_scrim_div.style.display="none";
    delete_scrim_div.style.display="none";
    add_team_div.style.display="none";
    modify_team_div.style.display="none";
    selected_team.style.display='none';
})

/////modify scrim/edit scrim↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
async function getScrims() {

    axios.get()
    try{
        let data = await axios.get('/adminhome/getscrims')
        //console.log('get questions aa gaya',data);
        //console.log(data.data);
        addtodropdown1(data.data);
        // addtodropdown2(data.data);
        }
    catch (e) {console.log(e)}

};

function addtodropdown1(data) {
    // console.log(data);
    selectScrim.innerHTML='';
    for(let i=0; i<data.length; i++){
        
        const option = document.createElement('option');
        option.value = data[i].scrimname//isme sirf naam dalna hai?
        option.innerText= data[i].scrimname
        selectScrim.appendChild(option);
    }


}


display_add_new_team_btn.addEventListener("click", ()=>{
    
    getAllTeams();
    add_team_div.style.display="block";
    modify_team_div.style.display="none";
    selected_team.style.display="none";
    delete_team_scrim_div.style.display="none";
})

display_edit_team_btn.addEventListener("click", ()=>{
    selected_scrim_name.innerHTML =`SELECTED SCRIM: ${selectScrim.value}`

    getTeams(selectScrim.value);
    add_team_div.style.display="none";
    modify_team_div.style.display="block";
    selected_team.style.display="none";
    delete_team_scrim_div.style.display="none";
});

// add new team to scrim ↓↓↓↓↓

async function getAllTeams (){

    try{
        let data = await axios.get('/adminhome/getallteams', {
            params: {
                scrimname: selectScrim.value
            }
        })
        //console.log('get questions aa gaya',data);
        // console.log(data);
        
        //addtoselectteamdropdown(data.data);
        addteamtoscrimdropdown(data.data);
        }
    catch (e) {console.log(e)}
}


function addteamtoscrimdropdown(data){
    add_team_to_scrim.innerHTML="";
    for(let i=0; i<data.length; i++){
        
        const option = document.createElement('option');
        option.value = data[i].teamname
        option.innerText= data[i].teamname
        add_team_to_scrim.appendChild(option);
    }

}

submit_team_btn.addEventListener('click', async()=>{
        
    console.log(selectScrim.value, add_team_to_scrim.value)
    axios.post()
    try{
        const data = await axios.post('/adminhome/addteam', {scrimname: selectScrim.value, teamname: add_team_to_scrim.value})
        console.log(data)
    }
    catch (e) {console.log(e)}
    await getAllTeams();
})

// add new team to scrim ↑↑↑↑↑↑↑↑↑↑↑↑↑



//display/edit team/player entries↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
async function getTeams(selectedscrim) {

    axios.get()
    try{
        let data = await axios.get('/adminhome/getteams')
        //console.log('get questions aa gaya',data);
        // console.log(data.data);

        addtoteamsdropdown(data.data,selectedscrim);
        }
    catch (e) {console.log(e)}

};


function addtoteamsdropdown(data,selectedscrim){
    teams.innerHTML='';
    //    console.log(selectedscrim);
    
       const finaldata=data.filter((e)=>{
        if(e.scrimname===selectedscrim) return e})
    
        // console.log(finaldata);
    
        //const selectTeam = document.querySelector('.teams')
        
        for(let i=0; i<finaldata.length; i++){
            
            const option = document.createElement('option');
            option.value = finaldata[i].teamname;//isme sirf naam dalna hai?
            option.innerText= finaldata[i].teamname;
            teams.appendChild(option);
        }
    }


    


modify_team_data_btn.addEventListener('click', (e) =>{
        e.preventDefault();
        // selectPlayer.innerHTML="";
        const selected_team = document.querySelector('.selected_team');    
        selected_team.style.display='block';
    
        const current_team_name = document.querySelector('.current_team_name')
        current_team_name.innerHTML= `SELECTED TEAM: ${teams.value}`

        edit_player_entries_div.style.display='none';
        //getAllPlayers(teams.value)
})

////edit team entriesss↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓


submit_team_data_btn.addEventListener('click',async()=>{
    

    console.log(team_wins.value, position_points.value) ;
    axios.post()
    try{
        const data = await axios.post('/adminhome/addteamentries', {
            scrimname: selectScrim.value, 
            teamname: teams.value,
            team_wins: team_wins.value,
            team_position_pts: position_points.value,
            played_matches: played_matches.value
        })
        console.log(data)
    }
    catch (e) {console.log(e)}
    
});


////edit playerssss entriesss↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓


edit_player_entries_btn.addEventListener('click',()=>{
    edit_player_entries_div.style.display='block' ;
    get_Team_Scrim_Players(teams.value, selectScrim.value);
    getALLteamPlayers(teams.value, selectScrim.value);

});


async function get_Team_Scrim_Players(selectedteam, selectedscrim){

    axios.get()
    try{
        let data = await axios.get('/adminhome/getplayerdata')
        //console.log('get questions aa gaya',data);
        // console.log(data.data);
        addtoplayersdropdown(data.data, selectedteam, selectedscrim)      
        }
    catch (e) {console.log(e)}
}


function addtoplayersdropdown(data, selectedteam, selectedscrim){

    const finaldata=data.filter((e)=>{
        if(e.scrimname===selectedscrim && e.teamname===selectedteam ) return e})
            
        selectPlayer.innerHTML='';
        for(let i=0; i<finaldata.length; i++){
            
            const option = document.createElement('option');
            option.value = finaldata[i].member_name;//isme sirf naam dalna hai?
            option.innerText= finaldata[i].member_name;
            selectPlayer.appendChild(option);
        }
}


modify_member_data_btn.addEventListener('click', () => {
    
    selected_member.style.display = 'block';
    add_player_div.style.display='none';
})

selectPlayer.addEventListener('click', () => {
    delete_member_scrim.innerText= `remove ${selectPlayer.value}`;
    display_selected_member_name.innerHTML=` selected member name: ${selectPlayer.value}`;
})

delete_member_scrim.addEventListener('click', async()=>{
    try{
        const data = await axios.post('/adminhome/removeplayer',
        {
            scrimname: selectScrim.value,
            teamname: teams.value,
            member_name: selectPlayer.value
        })  
      
        await get_Team_Scrim_Players(teams.value, selectScrim.value);
        await getALLteamPlayers(teams.value, selectScrim.value);
      }
      catch(e) {console.log(e)};
})

///add new member to scrim↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

add_new_member_btn.addEventListener('click', (e) =>{
   
    selected_member.style.display='none';
    add_player_div.style.display='block';
    getALLteamPlayers(teams.value, selectScrim.value);

});


async function getALLteamPlayers(teamname, scrimname){
    console.log(teamname)
    try{
        let data = await axios.get('/adminhome/getALLteamPlayers',{
            params: {
              teamname: teamname,
              scrimname: scrimname
            }});
        //console.log('get questions aa gaya',data);
         console.log(data);
        
        
         addALLteamPlayersToDropdown(data.data)

        }
    catch (e) {console.log(e)}
}

function addALLteamPlayersToDropdown(data){
    console.log(data);
    member_name_input.innerHTML='';
    for(let i=0; i<data.length; i++){
        
        const option = document.createElement('option');
        option.value = data[i].member_name
        option.innerText= data[i].member_name
        member_name_input.appendChild(option);
    }
}

submit_member_btn.addEventListener('click',async () =>{
    // e.preventDefault();
    // selectPlayer.innerHTML="";

    // console.log(member_name_input.value,scrims2.value,teams.value);

    try{
       const data = await axios.post('/adminhome/addplayerdata',
       {
        member_name: member_name_input.value,
        scrimname: selectScrim.value,
        teamname: teams.value,
        match_wins:0,
        
        kills:0,
        damage:0,
        
      });

     // console.log(data);
    }

    catch(error){console.log(error)}
   await getALLteamPlayers(teams.value, selectScrim.value);
  await  get_Team_Scrim_Players(teams.value, selectScrim.value);
    
});





///add new member to scrim↑ ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

submit_player_data_btn.addEventListener('click', async(e)=>{
    e.preventDefault();
    console.log(position_points.value, kills.value, damage.value,teams.value,selectScrim.value,selectPlayer.value) 
    
    try{
        const data = await axios.post('/adminhome/addplayerdata',
        {   member_name:selectPlayer.value,
            scrimname:  selectScrim.value,
            teamname: teams.value,
            kills:kills.value,
            damage:damage.value,
           });

           console.log(data);
        }
 
     catch(error){console.log(error)}
    
}
)





//display/edit team/player entries↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑


display_delete_team_btn.addEventListener("click",() =>{
    getTeamstoDlt(selectScrim.value);
    add_team_div.style.display="none";
    modify_team_div.style.display="none";
    selected_team.style.display="none";
    delete_team_scrim_div.style.display="block";
})

async function getTeamstoDlt(selectedscrim) {

    try{
        let data = await axios.get('/adminhome/getteams')
        //console.log('get questions aa gaya',data);
        // console.log(data.data);

        addtoteamstodelete(data.data,selectedscrim);
        }
    catch (e) {console.log(e)}

};


function addtoteamstodelete(data,selectedscrim){
    selectDeleteTeam.innerHTML='';
    
       const finaldata=data.filter((e)=>{
        if(e.scrimname===selectedscrim) return e})
    
        // console.log(finaldata);
    
        //const selectTeam = document.querySelector('.teams')
        
        for(let i=0; i<finaldata.length; i++){
            
            const option = document.createElement('option');
            option.value = finaldata[i].teamname;
            option.innerText= finaldata[i].teamname;
            selectDeleteTeam.appendChild(option);
        }
    }

delete_team_scrim_btn.addEventListener('click', async()=>{
       
        try{
            const data = await axios.post('/adminhome/removeteam',
            {
                scrimname: selectScrim.value,
                teamname: selectDeleteTeam.value
            })  
            // addtopage(data);
            await getTeamstoDlt(selectScrim.value);
          }
          catch(e) {console.log(e)};
    
})



display_delete_scrim_btn.addEventListener("click", ()=>{
    
    getScrimstoDlt();
    modify_scrim_div.style.display="none";
    add_scrim_div.style.display="none";
    delete_scrim_div.style.display="block";
})

/////modify scrim/edit scrim↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
async function getScrimstoDlt() {

    axios.get()
    try{
        let data = await axios.get('/adminhome/getscrims')
        addtodeletescrimdropdown(data.data);
        }
    catch (e) {console.log(e)}

};

function addtodeletescrimdropdown(data) {
    selectDeleteScrim.innerHTML='';
    // console.log(data);
        
    for(let i=0; i<data.length; i++){
        const option = document.createElement('option');
        option.value = data[i].scrimname;
        option.innerText= data[i].scrimname;
        // option.id = data[i]._id;
        selectDeleteScrim.appendChild(option);
    }
}

delete_scrim_btn.addEventListener('click', async()=>{
    // console.log(selectDeleteScrim.value,"lalala", selectDeleteScrim.id);
    try{
        const data = await axios.post('/adminhome/deletescrim',
        {
            scrimname: selectDeleteScrim.value
        })  
        // addtopage(data);
        await getScrimstoDlt();
      }
      catch(e) {console.log(e)};
    
})






// Register New Team ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

register_new_team_btn.addEventListener("click", ()=>{
    manage_existing_team_div.style.display="none";
    register_new_team_div.style.display="block"
    
})


submit_new_team_btn.addEventListener("click",async()=>{
    
    try{
        const data = await axios.post('/adminhome/addnewteam',
        {teamname:new_teamname_input.value, teamshortform:teamshortform_input.value })
        getAllTeams_forManage();
        new_teamname_input.value='';
        teamshortform_input.value='';
    } 
    catch(error){console.log(error)}
})

// Select existing Teams to Manage ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

manage_existing_team_btn.addEventListener("click", ()=>{
    
    manage_existing_team_div.style.display="block";
    register_new_team_div.style.display="none"
    getAllTeams_forManage();
})


async function getAllTeams_forManage (){

    try{
        let data = await axios.get('/adminhome/getallteams')
        //console.log('get questions aa gaya',data);
        // console.log(data);
        
        addtoselectteamdropdown(data.data);
        // addteamtoscrimdropdown(data.data);
        }
    catch (e) {console.log(e)}
}

function addtoselectteamdropdown(data){
    // console.log(data);
    selectTeams.innerHTML = ""
    for(let i=0; i<data.length; i++){
        
        const option = document.createElement('option');
        option.value = data[i].teamname
        option.innerText= data[i].teamname
        selectTeams.appendChild(option);
    }

}

select_team_forManagebtn.addEventListener("click", ()=>{
   // getAllPlayers(selectTeams.value);
    manage_players_div.style.display="block";
})


// Manage Players ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

manage_existing_players_btn.addEventListener("click", ()=>{
    manage_existing_players_div.style.display='block'
    add_players_div.style.display='none';
    getALLteamPlayers_forManage(selectTeams.value)
})

add_new_player_btn.addEventListener('click', ()=>{
    manage_existing_players_div.style.display='none'
    add_players_div.style.display='block';
})


async function getALLteamPlayers_forManage(teamname){

    try{
        let data = await axios.get('/adminhome/getALLteamPlayers',{
            params: {
              teamname: teamname
            }});
        //console.log('get questions aa gaya',data);
        //  console.log(data);
        
        
         addALLteamPlayersDropdown_forManage(data.data)

        }
    catch (e) {console.log(e)}
}


function addALLteamPlayersDropdown_forManage(data) {

    selectPlayers.innerHTML = '';
    
    for(let i=0; i<data.length; i++){
        
        const option = document.createElement('option');
        option.value = data[i].member_name
        option.innerText= data[i].member_name
        selectPlayers.appendChild(option);
    }
}



add_player_btn.addEventListener("click", async()=>{
    
    // console.log(selectTeams.value, playername_input.value);

    try{
        const data = await axios.post('/adminhome/addnewplayer',
        {teamname:selectTeams.value, member_name:playername_input.value })
        // console.log(data);
        playername_input.value='';
    } 
    catch(error){console.log(error)}

    await getALLteamPlayers_forManage(selectTeams.value)
})
