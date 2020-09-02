
 async createHei(ctx, heiID, value)
   {
        const exists = await this.heiExists(ctx, heiID);
        if (exists) {
            throw new Error(`The hei  ${heiID} already exists`);
        }
        const asset = { value };
        const buffer = Buffer.from(JSON.stringify(asset));
        await ctx.stub.putState(heiID, buffer);






    }




    await this.createHei(ctx,this.info.Name,info);
