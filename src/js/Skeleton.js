export default class Skeleton {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.skeletonContainer = document.createElement("div");
    this.skeletonContainer.classList.add("skeleton-container");
    this.skeletonContainer.innerHTML = `
       <div class="skeleton-item">
         <div class="skeleton-date"></div>
         <div class="skeleton-details">
           <div class="skeleton-image"></div>
           <div class="skeleton-titles">
             <div class="skeleton-title"></div>
             <div class="skeleton-title"></div>
         </div>
         </div>
       </div>

       <div class="skeleton-item">
         <div class="skeleton-date"></div>
         <div class="skeleton-details">
           <div class="skeleton-image"></div>
           <div class="skeleton-titles">
             <div class="skeleton-title"></div>
             <div class="skeleton-title"></div>
         </div>
         </div>
       </div>

       <div class="skeleton-item">
         <div class="skeleton-date"></div>
         <div class="skeleton-details">
           <div class="skeleton-image"></div>
           <div class="skeleton-titles">
             <div class="skeleton-title"></div>
             <div class="skeleton-title"></div>
         </div>
         </div>
       </div>
        `;
    this.parentEl.append(this.skeletonContainer);
  }

  remove() {
    this.skeletonContainer.remove();
  }
}
