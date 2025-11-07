<script lang="ts">
   import { type Application, applicationStates } from "../data/types"
   import cardRejected from "/card-rejected.svg"
   import cardApplied from "/card-applied.svg"
   import cardContacted from "/card-contacted.svg"


   let { application } : {application:Application}  = $props();
   let {status,position,company,mode,salary,link,appliedDate} = $derived(application)

   const getStatusIcon = () =>{
        switch(status){
            case applicationStates.Rejected : {return cardRejected}
            case applicationStates.Applied : {return cardApplied}
            case applicationStates.Contacted : {return cardContacted}
            default:{
                throw new Error ("Could not fetch status card for job " + position + " at " + company) 
            }
        }
   }
</script>


<tr>
    <td><img src={getStatusIcon()} width="96" alt={"status"}/></td>
    <td>{position}</td>
    <td>{company}</td>
    <td>{mode}</td>
    <td>{salary}</td>
    <td>{link}</td>
    <td>{String(appliedDate.getDate()).padStart(2,'0')} {appliedDate.toLocaleString('default', { month: 'long' })} {appliedDate.getFullYear()}</td>
</tr>

<style>
    td{
        border-color: beige;
        border-width: 1px;
        padding: 1em 2em;
    }
</style>