const ArchiveLayout = ({ archive, latest }) => <div>
    <h1>News Archive</h1>
    <section id='archive-filter'>{archive}</section>
    <section id='archive-latest'>{latest}</section>
</div>

export default ArchiveLayout;