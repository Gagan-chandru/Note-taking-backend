import note from "../models/note.models.js"
export const createnote = async(req,res)=>{
try{
    const {title,content}=req.body;
    if(!title || !content){
        return res.status(400).json({message:"Title and Content are required"})
    }
    const newnote = new note({title,content})
    await newnote.save();
    res.status(201).json(newnote)
}catch(err){
    res.status(500).json({message:err.message})
}
}

export const getnote = async(req,res)=>{
 try{
   const notes = await note.find().sort({createdAt:-1})
   res.status(200).json(notes)
 }catch(err){
    res.status(500).json({message:err.message})
 }
}

export const updatenote = async(req,res)=>{
    try{
     const {title,content}=req.body; 
     const updatenote = await note.findByIdAndUpdate(req.params.id,{title,content},{new:true})
     if(!updatenote){
        return res.status(404).json({message:"No changes found"})
     }
     res.status(200).json(updatenote)
    }catch(err){
    res.status(500).json({message:err.message})
}
}

export const deletenote = async(req,res)=>{
    try{
     const deletenote = await note.findByIdAndDelete(req.params.id)
     if(!deletenote){
        return res.status(404).json({message:"Note not found"})
     }
     res.status(200).json({message:"Note Deleated Successfully"})
    }catch(err){
    res.status(500).json({message:err.message})
}
}

