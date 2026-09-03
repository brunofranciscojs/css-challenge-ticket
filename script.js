        let html = '';
        const consolar = (indice) => console.log(indice);
        const barWidth = (num) => Math.floor(Math.random()*num);
        const preco = (num) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(num);

        const bars = Array.from({length: 50}).map((bar,index) => `<b class="w-[${barWidth(index+1)}px]"></b>`).reverse().join('')

        fetch('./tickets.json').then(res => res.json()).then(tickets =>{

            tickets.map((ticket,i) =>{ 
            html +=
            `    <div class="grid overflow-hidden [grid-template-columns:9rem_1fr_1fr] [grid-template-areas:'line_._price''hr_hr_hr''abbr_dur_dest''name_._seat''train_._class''departure_._arrival''terminal_._gate''barcode_barcode_barcode''download_download_download'] px-5 items-center  w-full min-w-[430px] mask-[linear-gradient(#000_0_0),radial-gradient(circle_10px_at_100%_80px,transparent_99%,#000_101%),radial-gradient(circle_10px_at_0_80px,transparent_99%,#000_101%)] mask-exclude item select-none bg-white rounded-[2rem] py-5 gap-y-6 [corner-shape:squircle] border-2 border-gray-300">
                    <h1 class="font-bold text-nowrap [grid-area:line] before:bg-[#ffdf20] before:rounded-full before:border before:p-1 before:content-[url(./train.svg)] before:inline-grid before:relative before:w-7 before:h-7 before:top-1">
                        ${ticket.company}
                    </h1>
                    
                    <span class="justify-self-end font-bold [grid-area:price]"> ${preco(240)}</span>
                    <hr class="border-gray-300 [grid-area:hr] border-t-2 border-dashed w-full scale-[1.2_1] translate-y-1">
                    
                    <h2 class="font-bold leading-[0] h-fit w-fit text-2xl [grid-area:abbr] 
                            after:content-[attr(data-city)] 
                            after:text-xs 
                            after:leading-[0] 
                            after:block 
                            after:top-4.5
                            after:relative
                            after:font-semibold 
                            after:text-center" 
                        data-city="${ticket.from.city}">
                        ${ticket.from.code}
                    </h2>

                    <time class="bg-[#ffdf20] py-[2px] px-2 border-2 w-fit text-nowrap rounded-3xl font-bold [grid-area:dur] [anchor-name:--lines-${i+1}]
                                    before:content-['']
                                    before:bg-[radial-gradient(circle_at_3%_center,#ffdf20_4px,transparent_5px),radial-gradient(circle_at_97%_center,#ffdf20_4px,transparent_5px)]
                                    before:absolute
                                    before:[position-anchor:--lines-${i+1}]
                                    before:left-[anchor(center)]
                                    before:top-[anchor(center)]
                                    before:[translate:-50%_-50%]
                                    before:w-[calc(anchor-size(width)+5rem)]
                                    before:h-3

                                    after:content-['']
                                    after:border-dashed 
                                    after:border-gray-400 
                                    after:border-1 
                                    after:w-[calc(anchor-size(width)+4rem)]
                                    after:-z-1 
                                    after:[position-anchor:--lines-${i+1}] 
                                    after:left-[anchor(center)]
                                    after:top-[anchor(center)]
                                    after:absolute
                                    after:[translate:-50%_-50%]">
                        <img src="./train.svg" class="inline w-4 h-4 mr-1"> ${ticket.duration}
                    </time>

                    <address class="[grid-area:dest] h-fit w-fit font-bold justify-self-end leading-[0] text-2xl 
                                    after:content-[attr(data-dest)] 
                                    after:text-[12px]
                                    after:leading-[0] 
                                    after:block 
                                    after:top-4.5
                                    after:relative
                                    after:font-semibold 
                                    after:text-center"
                        data-dest="${ticket.to.city}" >
                        ${ticket.to.code}
                    </address>

                    <h2 class="font-bold text-lg leading-[1] [grid-area:name] flex gap-3 relative text-nowrap
                                    before:bg-[url(./bruno.png)] 
                                    before:bg-cover 
                                    before:bg-center
                                    before:bg-no-repeat
                                    before:border 
                                    before:rounded-full
                                    before:min-w-12
                                    before:h-12 
                                    
                                    after:content-[attr(data-email)] 
                                    after:text-sm
                                    after:leading-[0] 
                                    after:absolute 
                                    after:top-8
                                    after:left-15
                                    after:font-thin" 
                        data-email="${ticket.passenger.email}">
                        ${ticket.passenger.name}
                    </h2>
                    
                    <h2 class="relative leading-[0] font-bold text-xl justify-self-end [grid-area:seat] 
                              after:content-[attr(data-seat)] after:text-[12px] after:leading-[0] 
                              after:absolute after:-top-5 after:left-0 after:font-[400]" 
                            data-seat="Seat">
                            ${ticket.passenger.seat}
                    </h2>

                    <h2 class="font-bold [grid-area:train] before:content-['Train_No'] before:text-[12px] before:block before:font-[100]">${ticket.train_no}</h2>
                    <h2 class="font-bold text-right justify-self-end [grid-area:class] before:text-[12px] before:content-['Class'] before:block before:font-[100]">${ticket.class}</h2>
                    <time class="font-bold [grid-area:departure] before:content-['Departure'] before:text-[12px] before:block before:font-[100]">${ticket.departure}</time>
                    <time class="font-bold text-right justify-self-end [grid-area:arrival] before:content-['Arrival'] before:text-[12px] before:block before:font-[100]">${ticket.arrival}</time>
                    <h2 class="font-bold [grid-area:terminal] before:content-['Terminal'] before:text-[12px] before:block before:font-[100]">${ticket.terminal}</h2>
                    <h2 class="font-bold text-right justify-self-end [grid-area:gate] before:content-['Gate'] before:text-[12px] before:block before:font-[100]">${ticket.gate}</h2>
                    <code class="w-full flex h-full gap-1 [scale:1.2_1] [&_b]:bg-black [&_b]:inline-block [&_b]:h-full bg-yellow-100 h-23 py-6 px-8 saturate-40 border-gray-300 border-b [grid-area:barcode] min-h-[90px]">${bars}</code>
                    <button class="cursor-pointer [grid-area:download] font-bold" onclick="console.log('${ticket.passenger.name}')">Download Ticket</button>
            </div>`;
        });
        document.querySelector('main').innerHTML = html
    })
