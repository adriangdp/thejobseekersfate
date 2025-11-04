<script lang="ts">
   import { type Application } from "../data/types";

   let { application } : {application:Application}  = $props();
   let {status,position,company,mode,salary,link} = $derived(application)
</script>


<tr>
    <td>{status}</td>
    <td>{position}</td>
    <td>{company}</td>
    <td>{mode}</td>
    <td>{salary}</td>
    <td>{link}</td>
</tr>

<style>
    td{
        border-color: beige;
        border-width: 1px;
        padding: 1em 2em;
    }
</style>